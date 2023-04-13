import React from 'react';

const TimelineItem = (props) => {
    const { yearStart, yearEnd, title, description } = props.item

    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-500">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
                <div className="flex flex-wrap gap-4 flew-row items-center justify-start text-cs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
                        {yearStart}-{yearEnd}
                    </span>
                    <p className="text-lg font-semibold">
                        {title}
                    </p>
                </div>
                <p className="my-2 text-base font-normal">
                    {description}
                </p>
            </li>
        </ol>

    )
}

export default TimelineItem