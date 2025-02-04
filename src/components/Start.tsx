// import React from "react";

// export default function Start() {
//     return (
//         <div className="w-20 h-10 bg-blue-400 rounded-lg content-center hover:shadow-lg hover:shadow-red-100"><button>Start</button></div>
//     )
// };

import React from "react";

type StartProps = {
    onStartClick: () => void;
};

export default function Start({ onStartClick }: StartProps) {
    return (
        <div
            className="w-20 h-10 bg-blue-400 rounded-lg content-center hover:shadow-lg hover:shadow-red-100"
            onClick={onStartClick}
        >
            <button>Start</button>
        </div>
    );
}
