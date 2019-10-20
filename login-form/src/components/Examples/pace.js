import React from 'react';

function Pace() {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>
          Pace page
          <small>Loading example</small>
        </h1>
        <ol className="breadcrumb">
          <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
          <li><a href="#">Examples</a></li>
          <li className="active">Pace page</li>
        </ol>
      </section>
      {/* Main content */}
      <section className="content">
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
            Pace loading works automatically on page. You can still implement it with ajax requests by adding this js:
            <br /><code>$(document).ajaxStart(function() {'{'} Pace.restart(); {'}'});</code>
            <br />
            <div className="row">
              <div className="col-xs-12 text-center">
                <button type="button" className="btn btn-default btn-lrg ajax" title="Ajax Request">
                  <i className="fa fa-spin fa-refresh" />&nbsp; Get External Content
                </button>
              </div>
            </div>
            <div className="ajax-content">
            </div>
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

export default Pace;
