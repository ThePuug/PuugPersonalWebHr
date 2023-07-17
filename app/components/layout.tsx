export const Header = function() {
    return <>
        <div className="py-8 px-4 bg-white bg-opacity-30">
            <div className="container mx-auto">
                Remedies.World - where home remedies come to die
            </div>
        </div>
    </>
}

export const Footer = function() {
    return <>
        <div className="py-8 px-4 bg-white bg-opacity-30">
            © {new Date().getFullYear()} Remedies.World
        </div>
    </>
}

export const Divider = function({from}) {
    const colors = { 
        none: { stroke: "stroke-white", fill: "fill-white" },
        header: { stroke: "stroke-green=300", fill: "fill-green-300" },
        section: { stroke: "stroke-blue-300", fill: "fill-blue-300" },
        footer: { stroke: "stroke-red-300", fill: "fill-red-300" }
    }
    return <>
        <div className="h-0 overflow-visible">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none" width="100%">
                <path d="M 0 10 Q 50 0, 100 8" className={colors[from].fill + " " + colors[from].stroke} />
            </svg>
        </div>
    </>
}