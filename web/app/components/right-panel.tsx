"use client";
import Bar from "./bar";

const mockData = [
    {
        id: 1,
        title: "Item 1",
        subtitle: "Subtitle 1",
    },
    {
        id: 2,
        title: "Item 2",
        subtitle: "Subtitle 2",
    },
]

export default function RightPanel() {
    return (
        <div className="w-full h-full flex flex-col gap-4 items-end">
            <div className="pt-5 pr-1 w-[70%] flex flex-col gap-2">
                <div className="flex items-center w-full h-15 bg-gray-500/50 rounded-md p-4">
                    <p>Search</p>
                </div>
                <div className="flex items-center gap-2 w-full pl-4">
                    <div className="p-1 px-2 bg-gray-500/50 rounded-md">Category</div>
                    <div className="p-1 px-2 bg-gray-500/50 rounded-md">Date</div>
                </div>
                
            </div>
            {mockData.map((item) => {
                return <Bar key={item.id} title={item.title} subtitle={item.subtitle} />
            })}
        </div>
    );
}