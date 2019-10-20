import React from 'react';

const CollapsedSidebar = () => {
    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <h1>
                    Sidebar Collapsed
                    <small>Layout with collapsed sidebar on load</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                    <li><a href="#">Layout</a></li>
                    <li className="active">Collapsed Sidebar</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content">
                <div className="callout callout-info">
                    <h4>Tip!</h4>
                    <p>Add the sidebar-collapse class to the body tag to get this layout. You should combine this option with a
                        fixed layout if you have a long sidebar. Doing that will prevent your page content from getting stretched
                        vertically.</p>
                </div>
                {/* Default box */}
                <div className="box">
                    <div className="box-header with-border">
                        <h3 className="box-title">Title</h3>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i className="fa fa-minus" /></button>
                            <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                <i className="fa fa-times" /></button>
                        </div>
                    </div>
                    <div className="box-body">
                        Start creating your amazing application!
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer">
                        Footer
                    </div>
                    {/* /.box-footer*/}
                </div>
                {/* /.box */}
            </section>
            {/* /.content */}
        </div>
    );
}
export default CollapsedSidebar;