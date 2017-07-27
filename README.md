# Vue-Widgets

The vue-widgets provide customized vue component for displaying content with headers (similar to bootstrap panel), which is useful for building dashboards quickly. This component can hold any content you provide, such as charts, text, images etc. using the vue slots mechanism. This component allows header customization, with properties such as collapse, fullscreen and close. User can customize the header and it's background color and  the component will remember its state using localstorage. User can easily enable or disable any of the built-in features (collapse, fullscreen, close, set color etc.) using the component options.

## Live Example 
[http://162.242.223.167:9000/](http://162.242.223.167:9000/)

## Installing
```
npm install vue-widgets -S
```
## Getting Started

```javascript
import Vue from 'vue'
import VueWidgets from 'vue-widgets'
import 'vue-widgets/dist/styles/vue-widgets.css'

Vue.use(VueWidgets)
```

## Usage
```html
<Widget>
    <WidgetHeading :id="1" :Title="'Heading'" :TextColor="true" :DeleteButton="true" :ColorBox="true" :Expand="true" :Collapse="true"></WidgetHeading>
    <WidgetBody>
        body content
    </WidgetBody>
</Widget>
```
## Prerequisites

`Node.js 4+` `NPM 3+` and `Vue Js 2.0+` are required.

## Development

Install all required dependencies:

```
npm install

// Build and run the project
npm run dev
```
Go to localhost:8081 to inspect the example in your Browser.


## Built With

* [Webpack](https://webpack.js.org/) - The web framework used
* [gulp](http://gulpjs.com/) - Automated development toolkit

## Contributing

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/FlowzPlatform/vue-widgets/issues) or a [pull request](https://github.com/FlowzPlatform/vue-widgets/pulls)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/FlowzPlatform/vue-widgets/blob/master/LICENSE) file for details

## Acknowledgments
vue-widgets icons is brought to you by [fontawesome](http://fontawesome.io/)
