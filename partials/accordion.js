import React, { useState } from 'react';

export const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="accordion-item border-0 rounded-3 shadow-sm mb-3" onClick={() => setIsActive(!isActive)}>
            <h2 className="accordion-header" >
                <button className="accordion-button shadow-none rounded-3 collapsed" type="button"  >
                    <div>{title}</div>
                </button>
            </h2>
            {isActive &&
                <div className="accordion-body fs-sm pt-0">
                    <p>
                        {content}
                    </p>
                </div>
            }
        </div>
    );
};

 