import type { AfilmoryManifest } from '@afilmory/builder'

declare global {
  interface Window {
    __MANIFEST__: AfilmoryManifest
  }
}


