import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/knowledge-base/zh-HK/docs',
    component: ComponentCreator('/knowledge-base/zh-HK/docs', '0a6'),
    routes: [
      {
        path: '/knowledge-base/zh-HK/docs',
        component: ComponentCreator('/knowledge-base/zh-HK/docs', 'fd8'),
        routes: [
          {
            path: '/knowledge-base/zh-HK/docs',
            component: ComponentCreator('/knowledge-base/zh-HK/docs', '93a'),
            routes: [
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/cv/tracknet/',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/cv/tracknet/', '07a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/cv/yolo-series/',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/cv/yolo-series/', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/fundamental/',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/fundamental/', 'bfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/fundamental/onnx-overview',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/fundamental/onnx-overview', '946'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/fundamental/pytorch-pt-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/fundamental/pytorch-pt-guide', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/fundamental/tensorrt-engine',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/fundamental/tensorrt-engine', 'be5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/fundamental/wts-bridge',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/fundamental/wts-bridge', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/', '87a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/core-logic',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/core-logic', '845'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/dataloader-and-samplers',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/dataloader-and-samplers', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/dataset-design',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/dataset-design', '059'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/dataset-surgery',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/data/dataset-surgery', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/models/custom-layers',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/models/custom-layers', '783'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/models/model-surgery',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/models/model-surgery', '886'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/models/nn-module',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/models/nn-module', '232'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/optimization/loss-functions',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/optimization/loss-functions', '331'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/optimization/optimizers',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/optimization/optimizers', '721'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/optimization/schedulers',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/optimization/schedulers', '3c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/training-engineering',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/core-components/training-engineering', 'a23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/autograd',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/autograd', '59b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/device-management',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/device-management', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/serialization',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/serialization', '5ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/tensor-operations',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/fundamentals/tensor-operations', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/compiler',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/compiler', 'ada'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/data-pipeline',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/data-pipeline', '464'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/inference',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/inference', 'c54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/memory-management',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/memory-management', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/mixed-precision',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/mixed-precision', '46f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/profiling',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/deep-learning/pytorch-tutorial/performance-optimization/profiling', '556'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial/git-composition-strategy/',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial/git-composition-strategy/', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial/git-composition-strategy/submodule',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial/git-composition-strategy/submodule', 'f59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial/git-composition-strategy/subtree',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial/git-composition-strategy/subtree', 'e03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial/git-hooks-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial/git-hooks-guide', '033'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial/git-ignore-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial/git-ignore-guide', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial/git-merge-rebase-cherry-pick',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial/git-merge-rebase-cherry-pick', 'd9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/git-tutorial/git-workflow-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/git-tutorial/git-workflow-guide', 'e3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/architecture-overview',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/architecture-overview', 'bf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/development-environment',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/development-environment', '9d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/infrastructure-setup',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/infrastructure-setup', 'b1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/operations-troubleshooting',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/operations-troubleshooting', '565'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/personal-remote-access',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/personal-remote-access', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/production-deployment',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/production-deployment', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/ssh',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/ssh', 'c30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/infra/zero-trust-tutorial',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/infra/zero-trust-tutorial', '729'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/LLM/langchain',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/LLM/langchain', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/python-tutorial',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/python-tutorial', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/python-tutorial/pyproject-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/python-tutorial/pyproject-guide', '713'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/python-tutorial/python-engineering-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/python-tutorial/python-engineering-guide', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/python-tutorial/python-import-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/python-tutorial/python-import-guide', '52d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/python-tutorial/uv-guide',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/python-tutorial/uv-guide', 'ece'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/RiskControl',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/RiskControl', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/zh-HK/docs/template',
                component: ComponentCreator('/knowledge-base/zh-HK/docs/template', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/knowledge-base/zh-HK/',
    component: ComponentCreator('/knowledge-base/zh-HK/', '1e9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
