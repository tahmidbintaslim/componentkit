(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{57:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return r}),t.d(n,"rightToc",function(){return p}),t.d(n,"default",function(){return c});t(0);var o=t(133);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r={title:"Initial / Final Animations"},p=[],m={rightToc:p},l="wrapper";function c(e){var n=e.components,t=i(e,["components"]);return Object(o.b)(l,a({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We'll start with case of how to make your component appear on screen with a simple fade in animation."),Object(o.b)("p",null,"A component is considered to appear on the screen when it is added to a component tree and this tree is mounted. Thus, in order to achieve the aforementioned animation you wrap this component in a ",Object(o.b)("inlineCode",{parentName:"p"},"CKAnimationComponent")," and add it to the tree, for example as a child of a flexbox component:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"}),"auto const animatedComponent = ...\nauto const flexbox =\n[CKFlexboxComponent\n ...\n children:{\n   {[CKAnimationComponent\n     newWithComponent:animatedComponent\n     onInitialMount:CK::Animation::alphaFrom(0)]}\n }]\n")),Object(o.b)("p",null,"The first time this component is mounted, ",Object(o.b)("inlineCode",{parentName:"p"},"animatedComponent")," will fade in, changing its opacity from 0 to 1 (the value for the opacity in its view configuration). After that, ",Object(o.b)("inlineCode",{parentName:"p"},"animatedComponent")," will stay on screen, maintaining the value from the view configuration."),Object(o.b)("p",null,"One thing to note here is that this animation won't run again until ",Object(o.b)("inlineCode",{parentName:"p"},"animatedComponent")," is removed and then re-added to the tree. Usually, this is achieved by ",Object(o.b)("em",{parentName:"p"},"conditionally")," adding a component to the tree:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"}),"auto const animatedComponent = ...\nauto const flexbox =\n[CKFlexboxComponent\n ...\n children:{\n   {shouldShowAnimatedComponent ?\n    [CKAnimationComponent\n     newWithComponent:animatedComponent\n     onInitialMount:CK::Animation::alphaFrom(0)] :\n    nil}\n }]\n")),Object(o.b)("p",null,"Here, ",Object(o.b)("inlineCode",{parentName:"p"},"animatedComponent")," is only added to the tree if ",Object(o.b)("inlineCode",{parentName:"p"},"shouldShowAnimatedComponent")," flag is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". This flag may be a part of your component's state or may be received from its parent as a prop. As a result, ",Object(o.b)("inlineCode",{parentName:"p"},"animatedComponent")," will fade in each time the value of this flag changes from ",Object(o.b)("inlineCode",{parentName:"p"},"false")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and the component is re-added to the tree."),Object(o.b)("p",null,"The key takeaway here is that, if you want one of your child components to animate more than once, make sure it is added to the tree conditionally."),Object(o.b)("p",null,"The same principle applies to the case when you want your component to disappear with animation. For this to happen, the animated component has to be removed from the tree (or, rather, not added to the tree) as a result of a state or props update. This too, means that the component has to be added to the tree conditionally:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"}),"auto const animatedComponent = ...\nauto const flexbox =\n[CKFlexboxComponent\n ...\n children:{\n   {shouldShowAnimatedComponent ?\n    [CKAnimationComponent\n     newWithComponent:animatedComponent\n     onInitialMount:CK::Animation::alphaFrom(0)\n     onFinalUnmount:CK::Animation::alphaTo(0)] :\n    nil}\n }]\n")),Object(o.b)("p",null,"Here, in addition to the existing fade-in animation triggered when ",Object(o.b)("inlineCode",{parentName:"p"},"animatedComponent")," is added to the tree (",Object(o.b)("inlineCode",{parentName:"p"},"shouldShowAnimatedComponent")," changes from ",Object(o.b)("inlineCode",{parentName:"p"},"false")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"), there also would be a fade-out animation when the component is removed from the tree (",Object(o.b)("inlineCode",{parentName:"p"},"shouldShowAnimatedComponent")," changes from ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),")."),Object(o.b)("div",{class:"note"},Object(o.b)("p",null,"If you want a component to appear or disappear with an animation, it should be wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"CKAnimationComponent")," and conditionally added to the tree ",Object(o.b)("em",{parentName:"p"},"by its parent"),".")),Object(o.b)("p",null,'This can get you pretty far already but often you want to animate a change in a component that "survives" a tree regeneration.'))}c.isMDXComponent=!0}}]);