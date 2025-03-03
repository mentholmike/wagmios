<template>
  <canvas ref="canvas" class="fixed inset-0 w-screen h-screen"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvas = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null

onMounted(() => {
  if (!canvas.value) return

  // Scene setup
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#FFF8EE') // Cream color background

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 6
  camera.position.y = 1

  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas.value,
    antialias: true 
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create the light blue torus
  const torusGeometry1 = new THREE.TorusGeometry(2, 0.3, 16, 100)
  const torusMaterial1 = new THREE.MeshBasicMaterial({ 
    color: 0x60A5FA, // Light blue
    wireframe: true,
    transparent: true,
    opacity: 0.3
  })
  const torusBlue = new THREE.Mesh(torusGeometry1, torusMaterial1)
  torusBlue.rotation.x = Math.PI / 4
  scene.add(torusBlue)

  // Create the secondary torus
  const torusGeometry2 = new THREE.TorusGeometry(1.5, 0.3, 16, 100)
  const torusMaterial2 = new THREE.MeshBasicMaterial({ 
    color: 0x3B82F6, // Medium blue
    wireframe: true,
    transparent: true,
    opacity: 0.3
  })
  const torusLightBlue = new THREE.Mesh(torusGeometry2, torusMaterial2)
  torusLightBlue.rotation.x = Math.PI / 2
  torusLightBlue.rotation.y = Math.PI / 4
  scene.add(torusLightBlue)

  // Animation
  function animate() {
    animationId = requestAnimationFrame(animate)
    
    // Rotate the toruses with gentler motion for light theme
    torusBlue.rotation.x += 0.001
    torusBlue.rotation.y += 0.002
    
    torusLightBlue.rotation.x -= 0.002
    torusLightBlue.rotation.y += 0.001
    
    renderer.render(scene, camera)
  }

  animate()

  // Handle window resize
  const handleResize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', handleResize)
  
  // Cleanup
  onUnmounted(() => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
    }
    window.removeEventListener('resize', handleResize)
    
    // Dispose geometries and materials
    torusGeometry1.dispose()
    torusMaterial1.dispose()
    torusGeometry2.dispose()
    torusMaterial2.dispose()
    
    renderer.dispose()
  })
})
</script>

<style scoped>
canvas {
  pointer-events: none;
}
</style> 