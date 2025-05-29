import SvgRow from "./SvgRow";
import { ICONS } from "../data";

export default function Socials() {
    return (
    <div className="flex justify-between mb-10">
        <div>
            <p className="text-sm font-semibold tracking-wide uppercase text-black1 mb-4">Socials</p>
          <div className="flex gap-4">
           {ICONS.map(item => <SvgRow key={item} href={item}/>)}
          </div>
        </div>
        <div>
            <p className="text-sm font-semibold tracking-wide uppercase text-black1 pb-4">Platforms</p>
          <div className="flex gap-4">
            <SvgRow href={"./sprite.svg#icon-android"}/> 
            <SvgRow href={"./sprite.svg#icon-apple"}/> 
          </div>
        </div>
    </div>
    )}