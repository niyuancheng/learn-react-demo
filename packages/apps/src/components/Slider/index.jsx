import React, { useRef, useEffect, useState, memo } from 'react';
import "./index.css";

const Slider = memo(({
    width = 640,
    height = 400,
    autoPlay = false,
    gap = 2,
    arrow = false,
    beforeChange = () => {},
    afterChange = () => {},
    waitForAnimate = () => {},
    children
}) => {
    const [active, setActive] = useState(1);

    const ref = useRef(null);
    const timer = useRef(null);

    useEffect(() => {
        setTransition(active, ref.current);
    }, [active]);

    useEffect(() => {
        if (autoPlay) {
            timer.current = window.setInterval(() => {
                console.log('timer')
                if (active + 1 > React.Children.count(children)) {
                    setActive(1);
                } else {
                    setActive(active + 1);
                }
                beforeChange.call(this, active, active + 1 > React.Children.count(children) ? 1 : active + 1)
            }, gap * 1000)
        }

        ref.current.ontransitionstart = () => {
            waitForAnimate.call(this);
        }

        ref.current.ontransitionend = () => {
            afterChange.call(this, active);
        }

        return () => { 
            window.clearInterval(timer.current);
            ref.current && (ref.current.ontransitionend = null);
            ref.current && (ref.current.ontransitionstart = null);
        }
    })

    const setTransition = (index, container) => {
        const distance = (1 - index) * width;
        container.style.transform = `translate3d(${distance}px, 0, 0)`;
    }

    const handleBtnClick = (direction) => {
        if (direction === 'left') {
            beforeChange.call(this, active, active - 1 < 1 ? active : active - 1)
            setActive(active - 1 < 1 ? active : active - 1);
        } else if (direction === 'right') {
            beforeChange.call(this, active, active + 1 > React.Children.count(children) ? active : active + 1)
            setActive(active + 1 > React.Children.count(children) ? active : active + 1);
        }
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
                    width: `${React.Children.count(children) * width}px`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
                ref={ref}
                >
                {
                    children.map((child, index) => {
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
                {
                    arrow && <>
                        <span className='slider-button slider-button-left' onClick={() => handleBtnClick('left')}>{'<'}</span>
                        <span className='slider-button slider-button-right' onClick={() => handleBtnClick('right')}>{'>'}</span>
                    </>     
                }
        </div>
    )
})

export default Slider;