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
        log.Printf("Error decoding request: %v", err)
        http.Error(w, "Invalid request body", http.StatusBadRequest)
        return
    }

    log.Printf("Received chat request: %+v", chatReq)

    // Create the request for WILLOW
    willowReq := WillowRequest{
        Message:   chatReq.Message,
        SessionID: chatReq.SessionID,
        UserID:    chatReq.UserID,
    }

    // Convert request to JSON
    jsonData, err := json.Marshal(willowReq)
    if err != nil {
        log.Printf("Error marshaling request: %v", err)
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
        log.Printf("Error communicating with WILLOW: %v", err)
        http.Error(w, "Failed to communicate with WILLOW", http.StatusInternalServerError)
        return
    }
    defer resp.Body.Close()

    // Read WILLOW's response
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        log.Printf("Error reading WILLOW response: %v", err)
        http.Error(w, "Failed to read WILLOW response", http.StatusInternalServerError)
        return
    }

    log.Printf("Raw Willow response: %s", string(body))

    // Try to parse the response as JSON array
    var responseArray []map[string]interface{}
    if err := json.Unmarshal(body, &responseArray); err == nil && len(responseArray) > 0 {
        // Check if the first item has an "output" field
        if output, ok := responseArray[0]["output"].(string); ok {
            // Create a response with just the output text
            chatResp := ChatResponse{
                Response: output,
            }
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(chatResp)
            return
        }
    }

    // If we couldn't extract the output, just return the raw response
    chatResp := ChatResponse{
        Response: string(body),
    }

    // Set content type and send response
    w.Header().Set("Content-Type", "application/json")
    if err := json.NewEncoder(w).Encode(chatResp); err != nil {
        log.Printf("Error encoding response: %v", err)
        http.Error(w, "Failed to encode response", http.StatusInternalServerError)
        return
    }
} 