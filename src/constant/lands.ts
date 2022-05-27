import { Land } from 'models/land.model'

import verglaz from 'assets/images/land/Verglaz.png'
import verglazBg from 'assets/images/land/Verglaz_bg.png'
import verglazOverlay from 'assets/images/land/Verglaz_overlay.png'
import mirage from 'assets/images/land/Mirage.png'
import mirageBg from 'assets/images/land/Mirage_bg.png'
import mirageOverlay from 'assets/images/land/Mirage_overlay.png'
import zephr from 'assets/images/land/Zephr.png'
import zephrBg from 'assets/images/land/Zephr_bg.png'
import zephrOverlay from 'assets/images/land/Zephr_overlay.png'
import janus from 'assets/images/land/Janus.png'
import janusBg from 'assets/images/land/Janus_bg.png'
import janusOverlay from 'assets/images/land/Janus_overlay.png'
import devastatum from 'assets/images/land/Devastatum.png'
import devastatumBg from 'assets/images/land/Devastatum_bg.png'
import devastatumOverlay from 'assets/images/land/Devastatum_overlay.png'

export const DEFAULT_LANDS: Land[] = [
  { image: verglaz, bg: verglazBg, sectionBg: verglazOverlay, name: 'Verglaz' },
  { image: mirage, bg: mirageBg, sectionBg: mirageOverlay, name: 'Mirage' },
  { image: zephr, bg: zephrBg, sectionBg: zephrOverlay, name: 'Zephr' },
  { image: janus, bg: janusBg, sectionBg: janusOverlay, name: 'Janus' },
  { image: devastatum, bg: devastatumBg, sectionBg: devastatumOverlay, name: 'Devastatum' },
]
