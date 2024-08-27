# The Network Automation LANDSCAPE
![Network Automation Landscape Temp Logo](https://raw.githubusercontent.com/steinzi/network-automation-landscape/main/docs/screenshots/logo-white.png)
![Network Automation Landscape](https://raw.githubusercontent.com/steinzi/network-automation-landscape/main/docs/screenshots/landscape1.png)
Live at: [https://steinzi.com/network-automation-landscape/](https://steinzi.com/network-automation-landscape/)

This is a collection of resources for network automation. It is a work in progress and is not complete. It is intended to be a starting point for network engineers who are interested in network automation but are not sure where to start. It is also intended to be a resource for network engineers who are already familiar with network automation but are looking for additional resources.

The resources are organized into the following categories:
TODO

# For Developers 

This is just a landscape generated with [cncf/landscape2](https://github.com/cncf/landscape2).

- The `main` branch contains the output of the `landscape2 new` command plus our modified data regarding network automation resources.
- The `build` branch contains the output of the `landscape2 build` command, which is served by GitHub Pages at <https://steinzi.com/network-automation-landscape/>.
- The [build workflow](https://github.com/steinzi/network-automation-landscape/blob/main/.github/workflows/build.yml) buids the landscape and pushes the result to the `build` branch on every push to the `main` branch, once the data has been validated.

For more details refer to the [cncf/landscape2](https://github.com/cncf/landscape2) repository for more information on getting started.

## Local developer installation quick start:

### Pre-built binaries

Binary downloads of the landscape2 CLI tool can be found in the [releases page](https://github.com/cncf/landscape2/releases).

#### Install via Homebrew

```bash
brew install cncf/landscape2/landscape2
```

#### build and serve the landscape locally:
This serves the landscape on `http://127.0.0.1:8000`.
```bash
landscape2 build --data-file data.yml --settings-file settings.yml --guide-file guide.yml --games-file games.yml --logos-path logos --output-dir build && landscape2 serve --landscape-dir build
```

## Contributing

All contributions are welcome. Nothing is written in stone.

Just edit the `data.yml` file and submit a pull request. The data is in YAML format and is easy to read and edit.


Best
Steinzi