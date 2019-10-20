import React from 'react';

const slidersUI = () => {
    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <h1>
                    Sliders
                    <small>range sliders</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                    <li><a href="#">UI</a></li>
                    <li className="active">Sliders</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box box-primary">
                            <div className="box-header">
                                <h3 className="box-title">Bootstrap Slider</h3>
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                <div className="row margin">
                                    <div className="col-sm-6">
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="red" />
                                        <p>data-slider-id="red"</p>
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="blue" />
                                        <p>data-slider-id="blue"</p>
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="green" />
                                        <p>data-slider-id="green"</p>
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="yellow" />
                                        <p>data-slider-id="yellow"</p>
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="aqua" />
                                        <p>data-slider-id="aqua"</p>
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple" />
                                        <p style={{marginTop: '10px'}}>data-slider-id="purple"</p>
                                    </div>
                                    <div className="col-sm-6 text-center">
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="red" />
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="blue" />
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="green" />
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="yellow" />
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="aqua" />
                                        <input type="text" defaultValue className="slider form-control" data-slider-min={-200} data-slider-max={200} data-slider-step={5} data-slider-value="[-100,100]" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="purple" />
                                    </div>
                                </div>
                            </div>
                            {/* /.box-body */}
                        </div>
                        {/* /.box */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </section>
            {/* /.content */}
        </div>
    );
}
export default slidersUI;