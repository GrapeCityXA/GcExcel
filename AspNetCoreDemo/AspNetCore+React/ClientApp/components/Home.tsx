import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Home extends React.Component<{}, {}> {
    public render() {
        return <div>
            <h1>GrapeCity Documents for Excel(GcExcel) Asp.Net Core Demo!</h1>
            <p>Welcome to GcExcel Asp.Net Core demo.  This sample shows how to progam with GcExcel in Asp.Net Core server-side, and use React + Spread.Sheets client-side.</p>
            <ul>
                <li><a href='https://www.grapecity.com/en/documents-api-excel'>GcExcel</a> is a new high performing, low memory server component with full API for server-side spreadsheet generation, manipulation, and serialization to various formats including xlsx and ssjson. GcExcel targets multiple platforms including: .NET Framework, .NET Core, and Mono.</li>
                <li><a href='https://www.grapecity.com/en/spreadsheets'>Spread.Sheets</a> is the spreadsheet component of the SpreadJS product family. This enterprise-grade JavaScript spreadsheet displays and manages data much like Microsoft Excel. Popular features include a formula engine, sorting, filtering, input controls, sparklines, and native Excel input/output.</li>
            </ul>
            <p>You will explore some typical seneros about how to use GcExcel together with Spread.Sheets:</p>
            <ul>
                <li>In <Link to={'/ExcelTemplateDemo'}>Excel Template Demo</Link>, you will learn how to open an excel template at server side with GcExcel, then view or fill content for the template through Spread.Sheets at client side.</li>
                <li>In <Link to={'/ProgrammingDemo'}>Programming API Demo</Link>, You will learn how to program with GcExcel all yourself at server side, then view the result through Spread.Sheets at client side.</li>
                <li>In <Link to={'/ExcelIODemo'}>Excel IO Demo</Link>, you will learn how to upload an excel file from client and open the file using GcExcel at server side, then view the result through Spread.Sheets at client side.</li>
            </ul>
            <p>You can find more resources about <strong>GcExcel</strong> at:</p>
            <ul>
                <li><a href='http://demos.componentone.com/gcdocs/gcexcel/'>Online Demo Site</a></li>
                <li><a href='https://www.grapecity.com/en/documents-api-excel'>Product Home Site</a></li>
                <li><a href='https://nuget.org/packages/GrapeCity.Documents.Excel'>GcExcel Nuget Package Site</a></li>
                <li><a href='https://www.grapecity.com/en/spreadsheets'>Spread.Sheets Home Site</a></li>
            </ul>
        </div>;
    }
}
