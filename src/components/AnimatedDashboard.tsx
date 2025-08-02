import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, TrendingUp, Target, BarChart3, Zap, Activity } from 'lucide-react';

const AnimatedDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [adsScaling, setAdsScaling] = useState(false);
  const [automationRunning, setAutomationRunning] = useState(false);

  const metrics = [
    { label: 'ROI Increase', value: '347%', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Ad Performance', value: '2.8x', icon: Target, color: 'text-blue-400' },
    { label: 'Automation Rate', value: '94%', icon: Bot, color: 'text-purple-400' },
    { label: 'Cost Savings', value: '$125k', icon: BarChart3, color: 'text-yellow-400' }
  ];

  const tasks = [
    'Analyzing customer behavior...',
    'Optimizing ad spend allocation...',
    'Scaling high-performing campaigns...',
    'Generating performance insights...',
    'Automating workflow processes...'
  ];

  const [currentTask, setCurrentTask] = useState(0);

  useEffect(() => {
    const metricInterval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);

    const taskInterval = setInterval(() => {
      setCurrentTask((prev) => (prev + 1) % tasks.length);
    }, 3000);

    const adsInterval = setInterval(() => {
      setAdsScaling(prev => !prev);
    }, 4000);

    const automationInterval = setInterval(() => {
      setAutomationRunning(prev => !prev);
    }, 5000);

    return () => {
      clearInterval(metricInterval);
      clearInterval(taskInterval);
      clearInterval(adsInterval);
      clearInterval(automationInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] bg-gradient-to-br from-card/50 to-background/50 backdrop-blur-sm border border-border/20 rounded-3xl p-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">AI Command Center</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                activeMetric === index 
                  ? 'bg-primary/10 border-primary/30 shadow-lg shadow-primary/20' 
                  : 'bg-card/50 border-border/20'
              }`}
              animate={{
                scale: activeMetric === index ? 1.05 : 1,
                y: activeMetric === index ? -2 : 0
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 ${metric.color}`} />
                {activeMetric === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                )}
              </div>
              <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
              <div className={`text-lg font-bold ${activeMetric === index ? 'text-primary' : 'text-foreground'}`}>
                {metric.value}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI Agent Tasks */}
      <div className="relative z-10 mb-6">
        <div className="p-4 bg-card/30 border border-border/20 rounded-xl">
          <div className="flex items-center space-x-2 mb-3">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI Agent Status</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTask}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground"
            >
              {tasks[currentTask]}
            </motion.div>
          </AnimatePresence>
          <div className="mt-2 w-full bg-border/20 rounded-full h-1">
            <motion.div
              className="h-1 bg-gradient-primary rounded-full"
              animate={{ width: automationRunning ? '100%' : '20%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Ad Scaling Visualization */}
      <div className="relative z-10">
        <div className="p-4 bg-card/30 border border-border/20 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-foreground">Campaign Performance</span>
            </div>
            <motion.div
              animate={{ 
                scale: adsScaling ? [1, 1.2, 1] : 1,
                color: adsScaling ? '#10B981' : '#6B7280'
              }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium"
            >
              {adsScaling ? 'SCALING' : 'OPTIMIZING'}
            </motion.div>
          </div>
          
          <div className="flex items-end space-x-1 h-16">
            {[0.3, 0.6, 0.4, 0.8, 0.9, 0.7, 1.0].map((height, index) => (
              <motion.div
                key={index}
                className="bg-gradient-primary rounded-t flex-1"
                animate={{ 
                  height: adsScaling ? `${height * 100}%` : `${height * 60}%`,
                  opacity: adsScaling ? 1 : 0.7
                }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-8 w-4 h-4 bg-primary/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-8 w-3 h-3 bg-blue-400/30 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default AnimatedDashboard;