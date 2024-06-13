ARG JMETER_VERSION="5.6.3"
ARG JMETER_PROMETHEUS_LISTENER_VERSION="2.6.3"

FROM ubuntu:latest as builder
ARG JMETER_VERSION
ARG JMETER_PROMETHEUS_LISTENER_VERSION
ENV JMETER_HOME /opt/apache-jmeter-${JMETER_VERSION}
ENV JMETER_LIB_FOLDER ${JMETER_HOME}/lib/
ENV JMETER_PLUGINS_FOLDER ${JMETER_LIB_FOLDER}ext/

WORKDIR ${JMETER_HOME}
RUN  apt-get -y update \
&& apt-get install -y wget gnupg curl
RUN wget https://downloads.apache.org/jmeter/binaries/apache-jmeter-${JMETER_VERSION}.tgz
RUN tar -xvzf apache-jmeter-${JMETER_VERSION}.tgz
RUN mv apache-jmeter-${JMETER_VERSION}/* ${JMETER_HOME}
RUN rm -r ${JMETER_HOME}/apache-jmeter-${JMETER_VERSION}
RUN rm ${JMETER_HOME}/apache-jmeter-${JMETER_VERSION}.tgz

RUN curl -L "https://github.com/kolesnikovm/jmeter-prometheus-listener/releases/download/$JMETER_PROMETHEUS_LISTENER_VERSION/jmeter-prometheus-listener-$JMETER_PROMETHEUS_LISTENER_VERSION.jar" -o jmeter-prometheus-listener-${JMETER_PROMETHEUS_LISTENER_VERSION}.jar
RUN mv jmeter-prometheus-listener-${JMETER_PROMETHEUS_LISTENER_VERSION}.jar ${JMETER_PLUGINS_FOLDER}

FROM sapmachine:lts
ARG JMETER_VERSION
ENV JMETER_HOME /opt/apache-jmeter-${JMETER_VERSION}
ENV JMETER_HOME_BIN /opt/apache-jmeter-${JMETER_VERSION}/bin
WORKDIR ${JMETER_HOME_BIN}
COPY --from=builder ${JMETER_HOME} ${JMETER_HOME}
ENV JAVA_HOME=/usr/lib/jvm/sapmachine-21
ENV PATH="$JAVA_HOME/bin:${PATH}"
# CMD ["./opt/apache-jmeter-5.6.3/bin/jmeter", "-n", "-t", "/opt/apache-jmeter-5.6.3/test.jmx", "-J", "prometheus.collect_assertions=true", "-J", "prometheus.quantiles_age=2", "-J", "prometheus.push_interval=1", "-J", "prometheus.collect_jvm=true"]