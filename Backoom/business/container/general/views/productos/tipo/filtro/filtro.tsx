import styles from "./styles.module.css";
import {Range, getTrackBackground} from 'react-range';
import React from "react";



const STEP = 10000;
const MIN = 0;
const MAX = 1000000;
class Filtro extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    state = {
        values: [0, 500000],
        rtl: false,
        value: 0,
    };
    render() {
        const {rtl, values,} = this.state;

        let min = values[0];
        let max = values[1];
        let min_parseado = min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        let max_parseado = max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return (
            <>
                <div className={styles.filtro}>
                    <div className={styles.title}>
                        <h3>Filtros</h3>
                        <span>Rango de precio</span>
                    </div>
                    <div className={styles.range}>
                        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                            <Range
                                values={values}
                                step={STEP}
                                min={MIN}
                                max={MAX}
                                rtl={rtl}
                                onChange={ values => this.setState({values})}
                                renderTrack={({props, children}) => (
                                    <div
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{...props.style, height: '36px', display: 'flex', width: '100%'}}>
                                        <div ref={props.ref} style={{
                                            height: '5px',
                                            width: '100%',
                                            borderRadius: '4px',
                                            background: getTrackBackground({
                                                values,
                                                colors: ['#ccc', '#000000', '#ccc'],
                                                min: MIN,
                                                max: MAX,
                                                rtl
                                            }),
                                            alignSelf: 'center'
                                        }}
                                        >
                                            {children}
                                        </div>
                                    </div>
                                )}
                                renderThumb={({index, props, isDragged}) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '16px',
                                            width: '16px',
                                            borderRadius: '50px',
                                            backgroundColor: '#000000',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: '0px 2px 6px #AAA'
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '-28px',
                                                color: '#fff',
                                                fontWeight: '400',
                                                fontSize: '14px',
                                                padding: '4px',
                                                borderRadius: '4px',
                                                backgroundColor: '#000000'
                                            }}
                                        >
                                            {values[index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                        <div className={styles.content_range}>
                            <div>
                                <p>Min</p>
                            </div>
                            <div>
                                <p>Max</p>
                            </div>
                        </div>
                        <div className={styles.valor_filtro}>
                            <div>
                                <p><span>$</span> {min_parseado}</p>
                            </div>
                            <div>
                                <p><span>$</span> {max_parseado}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Filtro;