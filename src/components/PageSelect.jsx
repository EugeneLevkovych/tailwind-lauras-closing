export default function PageSelect() {
    return (
        <div className="pb-38.5 pt-[2.9rem] container mx-auto px-4">
            <div className="flex gap-[10px] justify-end">
                <div className="border-none  bg-gray-lightest size-[2rem]">
                    <svg className="stroke-gray1 fill-transparent h-8 w-8">
                        <use href="./sprite.svg#icon-prev"></use>
                        {/* <path d="M12 8l8 8-8 8" /> */}
                    </svg>
                </div>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">1</button>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">2</button>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">...</button>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">12</button>
                <div className="border  bg-gray1 size-[2rem]">
                    <svg className="stroke-white1 fill-transparent h-8 w-8">
                        <use href="./sprite.svg#icon-next"></use>
                    </svg>
                </div>

            </div>
        </div>
    )
}