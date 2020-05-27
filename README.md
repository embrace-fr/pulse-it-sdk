
<p align="center">
  <img src="https://embrace.fr/wp-content/uploads/2020/03/logo-blanc.png">
  <br/>
  <a href="https://embrace.fr/">https://embrace.fr/</a>
</p>

# Pulse-IT SDK by Embrace

The official Javascript SDK for integrating your applications with Embrace's Pulse-IT platform.

Pulse-IT is a next-generation open workflow design and orchestration platform enabling users across organisations to manage, schedule, automate and supervise complex workflows. Pulse-IT allows users to automate media workflows and connect users, systems, and APIs. For more information, please visit [https://embrace.fr/](https://embrace.fr/).

## Getting Started

The library is distributed as an NPM package and can be installed with

`npm install @embrace-fr/pulse-it`

The library itself is written in Typescript and so includes full Typescript bindings.

## Usage

Create a new instance of the API like so:

```typescript
        const api = new PulseIT('<http://my-pulse-it-url>', '<my-user></my-password>', '<my-password>');
```

## Examples

Get all sequences with the state 'Done':

```typescript
        const sequences = await api.GetSequenceList({ state_filter: SeqState.Done });
```

Create a sequence from template with ID 9, named 'API test', with the current time as the deadline:

```typescript
        const newSequence = await api.CreateAndStartSequence({
            template_id: 9,
            title: 'API test',
            deadline: new Date(),
        });
```

The tests also include examples of how to use the SDK and can be run with

`npm run test`

