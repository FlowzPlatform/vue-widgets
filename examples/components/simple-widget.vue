<template>
<div>
    <Widget>
        <WidgetHeading :Hcolor="'#ff0000'" :Tcolor="'#00ff00'" :isMinimize="true" :Reset="true" :id="1" :Title="'Heading'" :TextColor="true" :DeleteButton="true" :ColorBox="true" :Expand="true" :Collapse="true"></WidgetHeading>
        <WidgetBody>
            body content
        </WidgetBody>
    </Widget>

    <Widget>
        <WidgetHeading :Reset="true" :id="2" :Title="'Heading'" :TextColor="true" :DeleteButton="true" :ColorBox="true" :Expand="true" :Collapse="true" :HeaderEditable="false"></WidgetHeading>
        <WidgetBody>
            body content
        </WidgetBody>
    </Widget>
</div>
</template>

<script>
export default {
    data () {
        return {
            message: "Vuw-widget demo"
        }
    }
}
</script>

<style lang="less">
    @import "../../src/styles/index.less";
</style>