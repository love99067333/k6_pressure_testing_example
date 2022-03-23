[參考](https://clouding.city/tool/k6/)

會進行五項測試

確保已經安裝[k6](https://k6.io/docs/getting-started/installation)

## Test Types
並非每種測試都叫做壓力測試，官網上有寫出這些測試的差別和使用情境，這邊簡單介紹一下：

## Smoke Testing
盡可能用最少的資源去測試，只是為了測試出有沒有 error

## Load Testing
Load testing 也稱 Performance testing ，主要是關注當前系統的配置，在多少 user 或 RPS 時，performance 是如何

## Stress Testing
和 Load testing 不同，主要是測試系統的極限在哪裡

## Spike Testing
是 Stress testing 的變體，與之不同的是，流量不會慢慢進來，測試在短時間內大量的流量進來，系統還能不能撐住

## Soak Testing
主要測試在長時間下，系統的可靠性和效能

## 一般執行
k6 run dir_to/full_test/{testcase}.js

## 如果要使用grafana+influxdb
k6 run --out influxdb=http://localhost:8086/k6 dir_to/full_test/{testcase}.js