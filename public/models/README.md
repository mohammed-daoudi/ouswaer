# 3D Models Directory

This directory contains 3D models for Ouswear caps in GLTF/GLB format.

## File Structure

```
public/models/
├── README.md
├── caps/                    # Cap models organized by type
│   ├── baseball/            # Baseball-style caps
│   ├── snapback/            # Snapback caps
│   ├── trucker/             # Trucker caps
│   └── beanie/              # Beanies
├── environments/            # HDR environment maps for lighting
└── thumbnails/              # Optimized thumbnail models (low-poly LOD)
```

## File Naming Convention

- Use kebab-case for file names
- Include model type and identifier: `{type}-{name}-{variant}.glb`
- Examples:
  - `baseball-classic-black.glb`
  - `snapback-urban-red.glb`
  - `trucker-vintage-gray.glb`

## Model Requirements

### Quality Standards
- **Format**: GLTF 2.0 (.glb or .gltf + .bin)
- **Textures**: Embedded or PBR materials
- **Polygon Count**:
  - High detail: < 10k triangles
  - Thumbnails: < 2k triangles
- **File Size**: < 5MB per model

### Lighting Setup
- Use PBR materials for realistic rendering
- Include normal maps for detail
- Optimize for dark environments with red accent lighting

### Animation Ready
- Models should be centered at origin (0,0,0)
- Proper scale (real-world units)
- Clean topology for smooth animations

## Performance Optimization

### Level of Detail (LOD)
- **High Detail**: Product detail pages
- **Medium Detail**: Product listings
- **Low Detail**: Thumbnails and background elements

### Loading Strategy
- Use React Three Fiber's `useGLTF` with suspense
- Implement lazy loading for non-visible models
- Preload hero/featured models

## Usage Example

```tsx
import { useGLTF } from '@react-three/drei'

function CapModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(`/models/caps/${modelPath}`)
  return <primitive object={scene} />
}

// Preload for better performance
useGLTF.preload('/models/caps/baseball-classic-black.glb')
```

## Asset Sources

- **Creation**: Blender, Maya, or other 3D software
- **Optimization**: gltf-pipeline, Blender glTF exporter
- **Testing**: Three.js editor, glTF Validator

## Notes

- All models should be tested in the 3D viewer before deployment
- Keep backups of source files (.blend, .ma, etc.) in version control
- Consider using a CDN for production to reduce load times
- Implement fallback 2D images for low-bandwidth users
