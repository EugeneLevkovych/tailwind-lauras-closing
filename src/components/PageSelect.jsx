export default function PageSelect() {
    return (
        <div className="pb-38.5 pt-[2.9rem] container mx-auto px-4">
            <div className="flex gap-[10px] justify-end">
                <button className="border-none  bg-gray-lightest size-[2rem]" type="button">
                    {/* <svg  className="fill-blue-500"> */}
                    <svg className="stroke-blue-500 size-5.5">
                        <use href="./assets/sprite.svg#icon-prev"></use>
                    </svg>
                </button>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">1</button>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">2</button>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">...</button>
                <button className="border-1 text-gray-darker border-gray-lightest size-[2rem]" type="button">12</button>
                <button className="border-1  bg-gray-darkest size-[2rem]" type="button">
                    <svg className="fill-blue-200 size-5.5">
                        <use href="./assets/sprite.svg#icon-next"></use>
                    </svg>
                </button>

            </div>
        </div>
    )
}