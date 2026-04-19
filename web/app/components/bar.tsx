"use client"

export default function Bar({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="w-145 h-20 bg-gray-700/90 rounded-l-md">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}