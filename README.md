# Community collaboration in the context of COVID-19

This solution was created by Team Covid Yoddhas from Cognizant as a part of Call for Code 2020.

## Authors

- Mohammed Rizvi

## Contents

1. [Overview](#overview)
2. [The idea](#the-idea)
3. [How it works](#how-it-works)
4. [Diagrams](#diagrams)
6. [Resources](#resources)

## Overview

### What's the problem?

In Current Pandemic situation, the best way to prevent the COVID-19 virus spread is maintaining the social distance at public places. But at the moment it’s getting difficult to maintain the same due to lack of information or any identification system which will notify what is the best time to visit the particular place or how many people are present at a moment to plan your visit or how much capacity can be hold by respective business / places?

We require a single platform where we can check the capacity of business / places, and how many people expected to visit that place at a particular time so that any individual can decide when it will be safe to visit the place.

Similarly business also can decide how much capacity they can hold to maintain social distancing under adherence of Government rules and regulations. Also, if many people are not expected to visit then business can operate with less staff which will result in less people coming out of their home.

We don’t have any system which will allow us to make a booking to particular place in order to inform earlier at what time any person is planning to visit the place, we can control the crowd by placing the booking system with respective timeslots with the management of business staff and booking.

### How can technology help?

Mobile, web, and cloud services enable rapid deployment of applications that can empower cooperation in the community. [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/) is a service on [IBM Cloud](https://cloud.ibm.com) that allows you to build, train, and deploy conversational interactions into any application, device, or channel.

Creating a chatbot using Watson Assistant can help you address the issues that your users may face while trying to gather the necessary information. Embedding location/routing services (like [HERE](https://developer.here.com/products/routing)) can enhance such applications, giving optimum guidance so that they are outside of their isolation location for the minimum amount of time.

## The idea

The goal is to provide a mobile application, along with server-side components, that serves as the basis to build out a community cooperation application that addresses booking appointment in advance, see number of people expected to visit at the same time, business opening hours, business maintain and manage their staff.

Mobile application where people can see the footfall at specific business for specific timeslot and decide whether it’s safe to visit at this particular slot or postpone the visit. Customer can book a slot to visit specific place be it a shopping malls, grocery stores, banks, private offices, restaurants, showrooms etc and see the number of people expected to visit that place at a given time.

Similarly Business places or Retail Places can also have access to system which will help them to maintain the crowd without risking the spread of Corona Virus and create the safe environment for customers planning to visit the place. Also, it will help business to manage their staff.

## How it works

First step would be for buisness to register themself and provide details about business operation hours, how many people can visit in hourly slot, whether the booking is mandatory before visiting the store and their location. This information is then stored in a database in the IBM Cloud.

Now customer would be able to check how many people are expected to visit particular place at a particular date / timeslot and accordingly book an appointment if booking is mandatory before visiting the store. If booking not mandatory then business will have provision to update the walk-in count on hourly basis so that customers can see how many people are inside the store and then decide whether they need to visit now or postpone the visit.

With the help of Watson Assisstant (chatbot), customer can find out business operating hours, whether the booking is mandatory or not, business location and other required details.

Also, business can maintain their staff list and intimate them via email if they need to come to store or they can work from home depending upon number of customers expected to visit the store.

## Diagrams

![Cooperation architecture diagram](/images/architecture-diagram.png)

## Resources

- [IBM Cloud](https://www.ibm.com/cloud)
- [Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started)
- [IBM Cloudant](https://cloud.ibm.com/docs/Cloudant?topic=cloudant-overview)
- [HERE Location Services](https://developer.here.com/documentation)
- [Node.js](https://nodejs.org)
- [React Native](https://reactnative.dev/)
