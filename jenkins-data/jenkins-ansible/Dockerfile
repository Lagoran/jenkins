#FROM jenkins/jenkins

#USER root

#RUN curl -O https://bootstrap.pypa.io/get-pip.py && \
#    python get-pip.py && \
#    pip install ansible

#USER jenkins

FROM jenkins/jenkins:lts

USER root

RUN apt-get update && \
    apt-get install -y python3-pip && \
    rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip && \
    pip install ansible && \
    pip cache purge

USER jenkins


