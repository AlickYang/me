import React from 'react'
import TimelineItem from './TimelineItem'
import timeline from '@/data/timeline'

const Timeline = () => {
    return (
        <div>
            <div className="text-center p-10 py-10">
                <h2 className="text-3xl font-latoBlack">
                    My Journey
                </h2>
            </div>
            <div className="timeline text-left flex flex-col md:flex-row justify-center mt-10">
                <div className="w-full md:w-7/12">
                    {
                        timeline.map(item => (
                            <TimelineItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline