import React, { useRef } from 'react';
import "./index.css";

export default function Slider(props) {
    const width = props.width || 640;
    const height = props.height || 400;
    const ref = useRef(null);

    const handleBtnClick = (direction) => {
        console.log(ref.current);
        
    }
    return (
        <div 
            className="nova-slider-container" 
            style={{height: `${height}px`, width: `${width}px`}}
        >
            <div 
                className='nova-slider-track' 
                style={{
                    height: `${height}px`, 
                    width: `${React.Children.count(props.children) * width}px`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
                ref={ref}
                >
                {
                    props.children.map((child, index) => {
                        return React.cloneElement(child, {
                            className: child.props.className + ' nova-slider-item',
                            key: index,
                            style: {
                                ...child.props.style,
                                width: `${width}px`,
                                height: `${height}px`
                            }
                        })
                    })
                }
            </div>

            <span className='slider-button slider-button-left' onClick={() => handleBtnClick('left')}>{'<'}</span>
            <span className='slider-button slider-button-right' onClick={() => handleBtnClick('right')}>{'>'}</span>
        </div>
    )
}