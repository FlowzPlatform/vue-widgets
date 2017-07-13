# Vue-Widgets

The vue-widgets provides customized vue component. this component can hold content like charts, text, images etc. this component have properties like collapse, fullscreen and close. user can customize component header and it's background color and component will maintain states using localstorage. user can easily add or remove built-in features like collapse, fullscreen, close, set color etc.

## Installing
```
npm install vue-widgets -S
```
## Getting Started

```javascript
import Vue from 'vue'
import VueWidgets from 'vue-widgets'
import 'vue-widgets/dist/styles/vue-widgets.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(VueWidgets)
Vue.component('Icon', Icon)
```

## Usage
```javascript
<Widget>
    <WidgetHeading :id="1" :Title="'Heading'" :TextColor="true" :DeleteButton="true" :ColorBox="true" :Expand="true" :Collapse="true"></WidgetHeading>
    <WidgetBody>
        body content
    </WidgetBody>
</Widget>
```
### Prerequisites

`Node.js 4+` `NPM 3+` and `Vue Js 2.0+` are required.

## Built With

* [Webpack](https://webpack.js.org/) - The web framework used
* [gulp](http://gulpjs.com/) - Automated development toolkit

## Contributing

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/FlowzPlatform/vue-widgets/issues) or a [pull request](https://github.com/FlowzPlatform/vue-widgets/pulls)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/FlowzPlatform/vue-widgets/blob/master/LICENSE) file for details

## Acknowledgments
vue-widgets icons is brought to you by [vue-awesome](https://github.com/Justineo/vue-awesome)

