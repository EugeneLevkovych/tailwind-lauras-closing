import Company from "./Company";
import SignUp from "./SignUp";
import Socials from "./Socials";
import WeAccept from "./WeAccept";

export default function Footer() {
    return (
<div className="py-16.5 bg-white-dark">
    <div className="flex flex-wrap-reverse gap-5 lg:flex-nowrap lg:gap-20 xl:gap-40 container mx-auto px-4">
          <Company />   
        <div>
          <Socials />
          <SignUp />
          <WeAccept />
        </div>
    </div>
</div>
    )
}