export default function Avatar() {
    return (
        <div className="w-8 h-8 bg-blue-500 rounded-full overflow-hidden">
            {/* Your avatar content goes here */}
            <img
                src="/images/harvey.jpeg"  // Replace with your image source
                alt="Avatar"
                className="w-full h-full object-cover"
            />
        </div>
    );
}