export default function SignUp() {
    return (
        <form className="mb-[3rem] xl:mb-[3.8rem]">
            <label className="block mb-[5px] text-sm font-medium tracking-wider text-gray1 uppercase" htmlFor="subscribe">Sign up for Laura’s Closet  style news</label>
            <input className="lg:max-w-70 xl:max-w-103 w-full h-11 pl-4 border-1 border-gray-lighter mb-[1.1rem] outline-green-400" type="text" id="subscribe" placeholder="Your email" />
            <button className="lg:max-w-30 xl:max-w-[8.3rem] w-full h-11 lg:ml-2 bg-gray1 text-sm font-semibold tracking-wider uppercase text-white2 mb-[1.1rem]" type="submit">Subscribe</button>
            <p className="text-xs font-medium tracking-wider text-gray-main">By clicking the <span className="uppercase">subscribe</span> button, you are agreeing to our <a className="font-medium underline underline-offset-4 text-blue1" href="#">Privacy & Cookie Policy</a></p>
        </form>     
    )}