<template>
<div class="row">
    <div class="col-lg-6">
        <Widget>
            <WidgetHeading :Hcolor="'#9d4c99'" :Tcolor="'#ffffff'" :isMinimize="false" :Reset="true" :id="1" :Title="'Data Table'" :TextColor="true" :DeleteButton="true" :ColorBox="true" :Expand="true" :Collapse="true"></WidgetHeading>
            <WidgetBody>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </table>
            </WidgetBody>
        </Widget>
    </div>
    <div class="col-lg-6">
        <Widget>
            <WidgetHeading :Hcolor="'#3466cc'" :Tcolor="'#ffffff'" :Reset="true" :id="2" :Title="'Google Chart'" :TextColor="true" :DeleteButton="true" :ColorBox="true" :Expand="true" :Collapse="true" :HeaderEditable="false"></WidgetHeading>
            <WidgetBody>
                <div id="piechart"></div>
            </WidgetBody>
        </Widget>    
    </div>
</div>
</template>

<script>
// import google from '../../dist/gstatic.js'
export default {
    data () {
        return {
            message: "Vuw-widget demo"
        }
    },
    mounted () {
        // Load google charts
        google.charts.load('current', {'packages':['corechart']})
        google.charts.setOnLoadCallback(drawChart)

        // Draw the chart and set the chart values
        function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 8],
        ['Eat', 2],
        ['TV', 4],
        ['Gym', 2],
        ['Sleep', 8]
        ])

        // Optional add a title and set the width and height of the chart
        var options = {'title':'My Average Day', 'width':550, 'height':400}

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'))
           chart.draw(data, options)
        }
    }
}
</script>

<style lang="less">
    @import "../../src/styles/index.less";
    table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>