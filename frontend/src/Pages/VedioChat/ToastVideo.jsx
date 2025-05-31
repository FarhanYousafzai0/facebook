 const ToastVideo = ({ callerName }) => {

    const handleAnswer = () => {

    }
    const handleIgnore = () => {

    }

    return (

        <div className={`fixed top-6 right-6 z-50 max-w-xs w-full transition-all duration-500 ease-in-out transform opacity-100 translate-y-0 scale-100`}>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-2xl p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Incoming Call</h3>
                        <p className="text-sm opacity-90">{callerName}</p>
                    </div>
                </div>
                <div className="flex gap-2 justify-end">
                    <button
                        onClick={handleAnswer}
                        className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                    >
                        Answer
                    </button>
                    <button
                        onClick={handleIgnore}
                        className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                    >
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ToastVideo