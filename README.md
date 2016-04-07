# fed_static_generator_setup

A Front End Developer setup using: Assemble, LESS (css pre-processor) and browsersync.

## Getting Started

Install all dependencies by running
```bash
$ npm install
```

After all the dependencies gets installed you're ready to go and run:

```bash
$ grunt serve
```

## What's in here beside the setup?

### LESS

- ITCSS + SMACSS inspired folder structure
```bash
  less/
  |--settings/
  |--tools/
  |  |--animated/
  |  |  |--fadeIn.less
  |  |  |--fadeOut.less
  |  |  |--etc...
  |  |--mixins.less
  |--base/
  |  |--base.less
  |--generic/
  |  |--normalize.less
  |--layout/
  |--module/
  |--pages/ (page specific imports)
  |--trumps/
  |  |--media.less
  |  |--states.less
  |--styles.less
```
- A collection of mixins
- CSS animation by (https://daneden.github.io/animate.css/) splitted into separate files ~_~
- Readable Responsive media utilities
```bash
    .media--hidden@tablet
    .media--available@tablet
    .media--hidden@mobile
    .media--available@mobile
```
- Global states
```bash
    .is-hidden
```

### Assemble

- A sample of how to dynamically create header/footer navigation

```bash
  ** For Header navigation in nav.hbs **
      {{#each pages}}
          {{#is data.section "main"}}
              <li {{#is ../../page.dest this.dest}} class="is-active"{{/is}}>
                  <a href="{{relative ../../page.dest this.dest}}">{{data.title}}</a>
              </li>
          {{/is}}
      {{/each}}

  ** Loops all files in the pages folder that has this configuration **
      ---
      section: main
      ---

  ** For footer.hbs **
      {{#each pages}}
          {{#isnt data.exclude_from_footer true}}
              <li>
                  <a href="{{relative ../../page.dest this.dest}}">{{data.title}}</a>
              </li>
          {{/isnt}}
      {{/each}}

  ** Loops all the files in the pages folder except for files that have this configuration **
      ---
      exclude_from_footer: true
      ---
```
- Sample of how to add cutom css by using this
```bash
    ** in default.hbs **
    {{#if custom_css}}
        {{#each this.custom_css}}
            <link rel="stylesheet" href="{{path}}">
        {{/each}}
    {{/if}}

    ** in index.hbs **
    custom_css: [
        {path: asset/css/pages/home.css},
        {path: asset/css/pages/home2.css},
    ]
```

