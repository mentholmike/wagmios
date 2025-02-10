<template>
  <canvas ref="canvas" class="fixed inset-0 w-screen h-screen"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (!canvas.value) return

  // Scene setup
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#111827')

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 6
  camera.position.y = 1

  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas.value,
    antialias: true 
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create the blue torus
  const torusGeometry1 = new THREE.TorusGeometry(2, 0.3, 16, 100)
  const torusMaterial1 = new THREE.MeshBasicMaterial({ 
    color: 0x6366f1,
    wireframe: true,
    transparent: true,
    opacity: 0.5
  })
  const torusBlue = new THREE.Mesh(torusGeometry1, torusMaterial1)
  torusBlue.rotation.x = Math.PI / 4
  scene.add(torusBlue)

  // Create the purple torus
  const torusGeometry2 = new THREE.TorusGeometry(1.5, 0.3, 16, 100)
  const torusMaterial2 = new THREE.MeshBasicMaterial({ 
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.5
  })
  const torusPurple = new THREE.Mesh(torusGeometry2, torusMaterial2)
  torusPurple.rotation.x = Math.PI / 2
  torusPurple.rotation.y = Math.PI / 4
  scene.add(torusPurple)

  // Animation
  function animate() {
    requestAnimationFrame(animate)
    
    // Rotate the toruses
    torusBlue.rotation.x += 0.002
    torusBlue.rotation.y += 0.003
    
    torusPurple.rotation.x -= 0.003
    torusPurple.rotation.y += 0.002
    
    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  window.addEventListener('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight
    
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  })
})
</script>

<style scoped>
canvas {
  pointer-events: none;
}
</style> 
