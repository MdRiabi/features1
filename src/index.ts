import { CustomMap } from "./CustomMap";
 import { Company } from './Company'; 
import {User} from './User';







const user = new User();
const comp = new Company();
const cm =  new CustomMap('map');

cm.addMarker(user);
cm.addMarker(comp);

