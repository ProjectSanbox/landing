import { Land } from 'models/land.model'

import arcticLand from 'assets/images/land/Arctic_Land.png'
import arcticLandBg from 'assets/images/land/Arctic_Land_bg.png'
import desertLand from 'assets/images/land/Desert_Land.png'
import desertLandBg from 'assets/images/land/Desert_Land_bg.png'
import grassLand from 'assets/images/land/Grass_Land.png'
import grassLandBg from 'assets/images/land/Grass_Land_bg.png'
import mountainLand from 'assets/images/land/Mountain_Land.png'
import mountainLandBg from 'assets/images/land/Mountain_Land_bg.png'
import toxicWasteLand from 'assets/images/land/Toxic_Waste_Land.png'
import toxicWasteLandBg from 'assets/images/land/Toxic_Waste_Land_bg.png'

export const DEFAULT_LANDS: Land[] = [
  { image: arcticLand, bg: arcticLandBg, name: 'Land Name' },
  { image: desertLand, bg: desertLandBg, name: 'Land Name' },
  { image: grassLand, bg: grassLandBg, name: 'Land Name' },
  { image: mountainLand, bg: mountainLandBg, name: 'Land Name' },
  { image: toxicWasteLand, bg: toxicWasteLandBg, name: 'Land Name' },
]