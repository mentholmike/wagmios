package handlers

import (
    "bytes"
    "encoding/json"
    "net/http"
    "io/ioutil"
    "log"
)

type ChatRequest struct {
    Message   string `json:"message"`
    SessionID string `json:"sessionId"`
    UserID    string `json:"userId"`
}

type ChatResponse struct {
    Response string `json:"response"`
}

type WillowRequest struct {
    Message   string `json:"message"`
    SessionID string `json:"sessionId"`
    UserID    string `json:"user_id"`
}

func HandleChat(w http.ResponseWriter, r *http.Request) {
    // Set CORS headers
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

    if r.Method == "OPTIONS" {
        w.WriteHeader(http.StatusOK)
        return
    }

    // Parse the incoming request
    var chatReq ChatRequest
    if err := json.NewDecoder(r.Body).Decode(&chatReq); err != nil {
        http.Error(w, "Invalid request body", http.StatusBadRequest)
        return
    }

    // Create the request for WILLOW
    willowReq := WillowRequest{
        Message:   chatReq.Message,
        SessionID: chatReq.SessionID,
        UserID:    chatReq.UserID,
    }

    // Convert request to JSON
    jsonData, err := json.Marshal(willowReq)
    if err != nil {
        http.Error(w, "Failed to process request", http.StatusInternalServerError)
        return
    }

    // Send request to WILLOW
    resp, err := http.Post(
        "http://localhost:5678/webhook/wagmios-chat",
        "application/json",
        bytes.NewBuffer(jsonData),
    )
    if err != nil {
        http.Error(w, "Failed to communicate with WILLOW", http.StatusInternalServerError)
        return
    }
    defer resp.Body.Close()

    // Read WILLOW's response
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        http.Error(w, "Failed to read WILLOW response", http.StatusInternalServerError)
        return
    }

    log.Printf("Raw Willow response: %s", string(body))

    // Try to unmarshal as array first
    var responses []map[string]interface{}
    if err := json.Unmarshal(body, &responses); err != nil {
        // If array unmarshal fails, try single object
        var singleResponse map[string]interface{}
        if err := json.Unmarshal(body, &singleResponse); err != nil {
            log.Printf("Error unmarshaling response: %v", err)
            http.Error(w, "Invalid response from WILLOW", http.StatusInternalServerError)
            return
        }
        responses = []map[string]interface{}{singleResponse}
    }

    // Take the first response if available
    if len(responses) > 0 {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(responses[0])
        return
    }
} 