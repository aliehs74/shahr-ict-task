const OverviewItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <div>
            <h3 className="font-medium text-gray-700 mb-2"> {title}</h3>
            <p className="text-gray-600"> {description} </p>
        </div>
    )
}

export default OverviewItem