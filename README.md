# TESTS FOR HIGH TPS SCENARIO SUPPORT 

Here I have documented all the results of high tps scenarios for k6 and jmeter as loadgenerator tool. The primary focus of these tests is determine which is the most optimal setup to be selected to support high tps scenarios.

## Test results

All test result docs =>

- Test results with telegraf, refer [this](k6-tests/high-tps-test-with-telegraf.md)
- Tests with K6 prometheus experimenatal remote write option with native histograms enabled, see [this](k6-tests/prometheus-remote-write-tests.md)
- Tests with jmeter prometheus listener which supports prometheus remote write protocol , see [this](jmeter-tests/jmeter-prometheus-remote-write-tests.md)