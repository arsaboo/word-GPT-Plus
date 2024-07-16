import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    apiLabel: 'API',
    apiPlaceholder: 'Please choose API',
    replyLanguageLabel: 'Reply in',
    replyLanguagePlaceholder: 'Reply in',
    localLanguageLabel: 'UI Language',
    localLanguagePlaceholder: 'UI Language',
    officialAPIKeyLabel: 'API Key',
    officialAPIKeyPlaceholder: 'API key',
    officialBasePathLabel: 'Forward domain',
    officialBasePathPlaceholder: 'Forward domain',
    officialCustomModelLabel: 'Custom Model',
    officialCustomModelPlaceholder: 'Please input model',
    officialTemperatureLabel: 'Temperature',
    officialMaxTokensLabel: 'Max tokens',
    officialModelSelectLabel: 'Model',
    officialModelSelectPlaceholder: 'Please select model',
    azureAPIKeyLabel: 'API Key',
    azureAPIKeyPlaceholder: 'API key',
    azureAPIEndpointLabel: 'endpoint',
    azureAPIEndpointPlaceholder: 'endpoint',
    azureDeploymentNameLabel: 'Deploy name',
    azureDeploymentNamePlaceholder: 'Deploy name',
    azureTemperatureLabel: 'Temperature',
    azureMaxTokensLabel: 'Max tokens',
    palmAPIKeyLabel: 'API Key',
    palmAPIKeyPlaceholder: 'API key',
    palmAPIEndpointLabel: 'endpoint',
    palmAPIEndpointPlaceholder: 'endpoint',
    palmCustomModelLabel: 'Custom Model',
    palmCustomModelPlaceholder: 'Please input model',
    palmModelSelectLabel: 'Model',
    palmModelSelectPlaceholder: 'Please select model',
    palmTemperatureLabel: 'Temperature',
    palmMaxTokensLabel: 'Max tokens',
    geminiAPIKeyLabel: 'API Key',
    geminiAPIKeyPlaceholder: 'API key',
    geminiCustomModelLabel: 'Custom Model',
    geminiCustomModelPlaceholder: 'Please input model',
    geminiModelSelectLabel: 'Model',
    geminiModelSelectPlaceholder: 'Please select model',
    geminiTemperatureLabel: 'Temperature',
    geminiMaxTokensLabel: 'Max tokens',
    ollamaEndpointLabel: 'endpoint',
    ollamaCustomModelLabel: 'Custom Model',
    ollamaCustomModelPlaceholder: 'Please input model',
    ollamaModelSelectLabel: 'Model',
    ollamaModelSelectPlaceholder: 'Please select model',
    ollamaTemperatureLabel: 'Temperature',
    groqAPIKeyLabel: 'API Key',
    groqAPIKeyPlaceholder: 'API key for groq',
    groqTemperatureLabel: 'Temperature',
    groqMaxTokensLabel: 'Max tokens',
    groqModelSelectLabel: 'Model',
    groqModelSelectPlaceholder: 'Please select model',
    groqCustomModelLabel: 'Custom Model',
    groqCustomModelPlaceholder: 'Please input model',
    translate: 'Trans',
    summary: 'Sum',
    polish: 'Polish',
    grammar: 'Grammar',
    academic: 'Academic',
    settings: 'Settings',
    result: 'Result',
    confirm: 'Confirm',
    cancel: 'Cancel',
    settingOpen: 'Open',
    settingClose: 'Close',
    settingOllamaEndpoint: 'endpoint',
    settingProxy: 'Proxy',
    settingClickToShow: 'Click to set',
    settingEnableProxy: 'Enable proxy',
    settingProxyHost: 'Host',
    settingProxyPort: 'Port',
    settingProxyUsername: 'Username',
    settingProxyPassword: 'Password',
    settingProxyProtocol: 'Protocol',
    homeSystem: 'Character',
    homeSystemDescription: 'Please input the system prompt',
    addSystemPrompt: 'Add system prompt',
    addSystemPromptAlias: 'Alias',
    addSystemPromptAliasDescription: 'Please input the system prompt alias',
    addSystemPromptDescription: 'Please input the system prompt',
    removeSystemPrompt: 'Remove system prompt',
    homePrompt: 'Prompt',
    homePromptDescription: 'Please input the prompt',
    addPrompt: 'Add prompt',
    addPromptAlias: 'Alias',
    addPromptAliasDescription: 'Please input the prompt alias',
    addPromptDescription: 'Please input the prompt',
    removePrompt: 'Remove prompt',
    continue: 'Continue',
    start: 'Start',
    insertType: 'Insert',
    insertTypePlaceholder: 'Select insert type',
    replace: 'Replace',
    append: 'Append',
    newLine: 'New line',
    NoAction: 'No action',
    emptyAPIKey: 'Go to settings to set API key',
    backToHome: 'Back to home'
  },
  'zh-cn': {
    apiLabel: 'API',
    apiPlaceholder: '请选择API',
    replyLanguageLabel: '回复语言',
    replyLanguagePlaceholder: '回复语言',
    localLanguageLabel: 'UI语言',
    localLanguagePlaceholder: 'UI语言',
    officialAPIKeyLabel: 'API 密钥',
    officialAPIKeyPlaceholder: 'API 密钥',
    officialBasePathLabel: '转发域名',
    officialBasePathPlaceholder: '转发域名',
    officialCustomModelLabel: '自定义模型',
    officialCustomModelPlaceholder: '请输入模型',
    officialTemperatureLabel: 'temperature',
    officialMaxTokensLabel: 'max tokens',
    officialModelSelectLabel: '选择模型',
    officialModelSelectPlaceholder: '请选择模型',
    azureAPIKeyLabel: 'API 密钥',
    azureAPIKeyPlaceholder: 'API 密钥',
    azureAPIEndpointLabel: 'endpoint',
    azureAPIEndpointPlaceholder: 'endpoint',
    azureDeploymentNameLabel: '部署名',
    azureDeploymentNamePlaceholder: '部署名',
    azureTemperatureLabel: 'temperature',
    azureMaxTokensLabel: 'max tokens',
    palmAPIKeyLabel: 'API 密钥',
    palmAPIKeyPlaceholder: 'API 密钥',
    palmAPIEndpointLabel: 'endpoint',
    palmAPIEndpointPlaceholder: 'endpoint',
    palmCustomModelLabel: '自定义模型',
    palmCustomModelPlaceholder: '请输入模型',
    palmModelSelectLabel: '选择模型',
    palmModelSelectPlaceholder: '请选择模型',
    palmTemperatureLabel: 'temperature',
    palmMaxTokensLabel: 'max tokens',
    geminiAPIKeyLabel: 'API 密钥',
    geminiAPIKeyPlaceholder: 'API 密钥',
    geminiCustomModelLabel: '自定义模型',
    geminiCustomModelPlaceholder: '请输入模型',
    geminiModelSelectLabel: '选择模型',
    geminiModelSelectPlaceholder: '请选择模型',
    geminiTemperatureLabel: 'temperature',
    geminiMaxTokensLabel: 'max tokens',
    ollamaEndpointLabel: 'endpoint',
    ollamaCustomModelLabel: '自定义模型',
    ollamaCustomModelPlaceholder: '请输入模型',
    ollamaModelSelectLabel: '选择模型',
    ollamaModelSelectPlaceholder: '请选择模型',
    ollamaTemperatureLabel: 'temperature',
    groqAPIKeyLabel: 'API 密钥',
    groqAPIKeyPlaceholder: 'API 密钥',
    groqTemperatureLabel: 'temperature',
    groqMaxTokensLabel: 'max tokens',
    groqModelSelectLabel: '选择模型',
    groqModelSelectPlaceholder: '请选择模型',
    groqCustomModelLabel: '自定义模型',
    groqCustomModelPlaceholder: '请输入模型',
    translate: '翻译',
    summary: '摘要',
    polish: '润色',
    grammar: '语法',
    academic: '学术',
    settings: '设置',
    result: '结果',
    confirm: '确认',
    cancel: '取消',
    settingOpen: '开',
    settingClose: '关',
    settingProxy: '代理',
    settingClickToShow: '点击设置',
    settingEnableProxy: '启用代理',
    settingProxyHost: '代理主机地址',
    settingProxyPort: '代理端口',
    settingProxyUsername: '代理用户名',
    settingProxyPassword: '代理密码',
    settingProxyProtocol: '代理协议',
    homeSystem: '角色设定',
    homeSystemDescription: '请输入角色设定提示',
    addSystemPrompt: '添加角色设定提示',
    addSystemPromptAlias: '别名',
    addSystemPromptAliasDescription: '请输入角色设定提示别名',
    addSystemPromptDescription: '请输入角色设定提示',
    removeSystemPrompt: '移除角色设定',
    homePrompt: '提示',
    homePromptDescription: '请输入提示',
    addPrompt: '添加提示',
    addPromptAlias: '别名',
    addPromptAliasDescription: '请输入提示别名',
    addPromptDescription: '请输入提示',
    removePrompt: '移除提示',
    continue: '继续',
    start: '开始',
    insertType: '插入方式',
    insertTypePlaceholder: '选择插入方式',
    replace: '替换',
    append: '追加',
    newLine: '新行',
    NoAction: '不操作',
    emptyAPIKey: '请先去设置API key',
    backToHome: '返回主页'
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('localLanguage') || 'en',
  fallbackLocale: 'zh-cn',
  messages
})
