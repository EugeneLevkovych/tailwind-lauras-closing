export default function Socials() {
    return (
    <div className="flex justify-between mb-10">
        <div>
            <p className="text-sm font-semibold tracking-wide uppercase text-black1 mb-4">Socials</p>
          <div className="flex gap-4">
            <svg className="size-8 fill-gray1">
                <use href="./sprite.svg#icon-facebook"></use>
            </svg>
             <svg className="size-8 fill-gray1">
                <use href="./sprite.svg#icon-twitter"></use>
            </svg>
             <svg className="size-8 fill-gray1">
                <use href="./sprite.svg#icon-instagram"></use>
            </svg>
             <svg className="size-8 fill-gray1">
                <use href="./sprite.svg#icon-tiktok"></use>
            </svg>
             <svg className="size-8 fill-gray1">
                <use href="./sprite.svg#icon-snapchat"></use>
            </svg>
          </div>
        </div>
        <div>
            <p className="text-sm font-semibold tracking-wide uppercase text-black1 pb-4">Platforms</p>
          <div className="flex gap-4"> 
             <svg className="size-8 fill-gray1">
                <use href="./sprite.svg#icon-android"></use>
            </svg>
             <svg className="size-8 fill-gray1">
                <use href="./sprite.svg#icon-apple"></use>
            </svg>
          </div>
        </div>
    </div>
    )}