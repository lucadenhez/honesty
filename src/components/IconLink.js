export default function IconLink(props) {
    return (
        <a className="inline-flex items-center font-medium text-blue-600 hover:text-blue-600/80 hover:cursor-pointer transition-all duration-200 ease-in-out" {...props}>
            {props.title}
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
    );
}
