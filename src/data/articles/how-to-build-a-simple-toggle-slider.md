---
title: How to Build a Simple Toggle Slider
date: February 2, 2025
tags: ["How To", "Web", "Short"]
image: ./images/slider-demo.jpg
alt: Title reading "HTML, CSS & JS Slider" with two toggle sliders, one off and one on, below
featured: true
---

Toggle sliders are a mainstay in web and app development, no doubt thanks to their prevalence in Apple's iOS. However, a developer needs to either use a component library that has a toggle slider or build one themselves. Using a component library is easier, but it can be excessive if one is only using that component. Instead, I'll go through how to build one with no fancy tools or frameworks required, just HTML, CSS, and JavaScript. One can also build a slider without JavaScript, which I'll go over after.

## The HTML

The HTML for the slider is quite simple: You need a clickable element (we use a button since we're using JavaScript)... And that's it! I'll show what we do for the slider's indicator next.

```html
<button class="toggle-default" data-js="toggle-slider"></button>
```

Make sure to specify a class name, as that is important for styling the slider. Also note the custom attribute `data-js` - This is used to easily grab our element from the DOM. An `id` attribute could also be used.

## The CSS

This is where the bulk of the work goes in to make your slider _look_ like a slider. We'll be using classes to manage the visual state of pur slider, so be sure to be consistent in the classes you use. To start, let's define the basic appearance of the slider.

```css
.toggle-default,
.toggle-altered {
  display: inline-block;
  width: 72px;
  height: 36px;
  border: none;
  border-radius: 18px;
  transition: background-color ease-in-out 400ms;
}
```

Here, we outline the basic appearance of the slider. We use `inline-block` so we can define a width for our slider without forcing it onto its own line. Width, height, and `border-radius` are all set in pixels, although responsive units like em or rem may also be used. We remove the default button element's border - although a border may still be used. Finally, we set the animation for when the colour of the slider changes. Next, we define which colours the slider should be in its default state and altered state. I used a light grey and blue, but you can use whichever you prefer.

```css
.toggle-default {
  background-color: #d1d1d1;
}

.toggle-altered {
  background-color: #40a1e2;
}
```

Next we need to style the indicator of the slider. This is the element that will move side to side when it is clicked. Recall that we didn't define an element for this; instead, we will be using CSS pseudo elements.

```css
.toggle-default::before,
.toggle-altered::before {
  content: "";
  display: block;
  position: relative;
  right: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  transition: transform ease-in-out 400ms;
}
```

Since we're using this pseudo-element as a shape we don't need any content, so an empty string will suffice. Display is block, as the relative positioning means we need not worry about how the pseudo-element interacts with others. Width and height may once again be defined in em or rem in lieu of pixels. Since the pseudo-element has equal height and width, we can use a percentage for `border-radius` without uneven results. Top and bottom are not needed as our pseudo-element will already be centered vertically; left and right may be adjusted as needed - 2px is what worked for me. The `background-color` may once again be set to whatever you wish. Finally, since we'll be using transform to move the indicator we define an animation for it. Next, we set up the transform to position the indcator in its default and altered states.

```css
.toggle-default::before {
  transform: translateX(0);
}

.toggle-altered::before {
  transform: translateX(34px);
}
```

Note that I used pixels to position the slider in its altered state. I found using a simple `100%` didn't place the slider evenly, so instead I opted to calculate the distance between positions in pixels and use that value. Again, you may use rem or em, and I encourage you to experiment with percentages as well. With the CSS done, let's move on to defining the behaviour of our slider.

## The JavaScript

The code for this is quite simple, as we only need to update the class of our slider to reflect its state.

```js
const slider = document.querySelector('[data-js="toggle-slider"]');

slider.addEventListener("click", () => {
  slider.className =
    slider.className == "toggle-default" ? "toggle-altered" : "toggle-default";
});
```

Note that we use the custom attribute `data-js` to select our slider; we do this because the class changes depending on its state and thus cannot be relied on. As mentioned earlier, an id attribute can be used instead. Once the slider is selected, we create a new event listener to update the class. I used a ternary statement here, but you can use an if/else statement, or abstract the logic into a separate funtion to call within the event listener. You may also add whatever other logic that is controlled by the slider within this event listener; keen eyes may notice that the slider on this very website can be used to change the theme from dark to light and vice versa!

With the JavaScript written, the slider is finished. Read on for a no-js solution, or take a look at the below CodePen to see it in action!

<iframe src="https://codesandbox.io/embed/3yss6v?view=preview&module=%2Fstyles.css"
  style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="toggle-slider"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Alternative solution

Although the toggle slider I just built uses JavaScript to control and alte the slider's state, we can also build a version that needs no JavaScript with the use of a checkbox. First we need to add the HTML:

```html
<label class="slider"><input type="checkbox" class="checkbox" /></label>
```

We use a label as our silder instead of a span (or any other element) because a label serves as a button to either focus or trigger the input it represents. In the case of a checkbox input, clicking the label checks and unchecks the box. We use this mechanic as well as the CSS-selectable state of the checkbox to add visuals to our slider.

```css
.slider {
  display: inline-block;
  transition: background-color ease-in-out 400ms;
  background-color: #d1d1d1;
  width: 72px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
}

.slider input {
  height: 0;
  width: 0;
}

.slider::before {
  content: "";
  display: block;
  position: relative;
  top: 3px;
  left: 3px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  transition: transform ease-in-out 400ms;
  transform: translateX(0);
}

.slider:has(input:checked) {
  background-color: #40a1e2;
}

.slider:has(input:checked)::before {
  transform: translateX(36px);
}
```

Here is the CSS for our slider. Note the appearance of the slider and its pseudo element aren't too disimilar to the previous slider we did. The pseudo-element's positioning values differ simply due to differing user agent styles between a button and a label; with a proper CSS reset the two would be identical. Note also that we explicitly use a pointer cursor here. Such behaviour is default for buttons, but not for labels. As before, sizing and colouration may be altered to your preferences or needs.

Note that we make the checkbox visually hidden by setting height and width to 0. For accessibility purposes this is preferred over `display: none`. Also note that our default appearance is placed along our constant styles instead of its wn section. This is because a checkbox does not have an unchecked state we can select in CSS. We do have a selector for the checked state, however, so we use that alongside a `:has()` pseudo-class to select our slider and its pseudo-element only when the input is checked.

This is a simple approach to a slider that involves no JavaScript. Of course, depending on the use case of your slider and your priorities one approach may be more preferable over the other - do you want to keep the DOM as uncluttered as possible or use JavaScript only when mandatory?. In my case, I needed to use JavaScript to achieve the purpose of the slider and my website is already light on JavaScript. I decided the button approach was best for me. You may have a different preference for your own website. Below is the CodePen for our no-js slider. Happy coding!

<iframe src="https://codesandbox.io/embed/vydkvr?view=editor+%2B+preview&module=%2Fstyles.css"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="no-js-slider"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
