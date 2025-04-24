export default function SectionTitle({ className = '', title }) {
    return (
        <h2 className={`text-dark-magenta mb-4 text-center text-4xl font-light ${className}`}>
            <div className="block sm:inline">
                <strong className="font-bold lowercase">{title}</strong>
            </div>
        </h2>
    );
}