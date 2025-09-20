import React, { useState } from 'react';
import CircularStartButton from './circular-start-button';
import '../../styles/circular-start-button.css';

/**
 * 圆形启动按钮演示组件
 * 展示如何使用 CircularStartButton 组件
 */
export const CircularStartButtonDemo: React.FC = () => {
  const [buttonState, setButtonState] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const handleToggle = (isPressed: boolean) => {
    setButtonState(isPressed);
    const message = isPressed ? 'Application started' : 'Application stopped';
    setLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const clearLog = () => {
    setLog([]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1a',
      padding: '40px',
      fontFamily: '"Playfair Display", serif',
      color: '#FDFEFD'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>
          Circular Start Button Demo
        </h1>
        
        {/* 主演示按钮 */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <CircularStartButton
            onToggle={handleToggle}
            ariaLabel="Start or stop the application"
          />
        </div>

        {/* 状态显示 */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p>Current State: <strong>{buttonState ? 'ACTIVE' : 'INACTIVE'}</strong></p>
        </div>

        {/* 多个按钮示例 */}
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginBottom: '60px', flexWrap: 'wrap' }}>
          <CircularStartButton
            onToggle={(pressed) => console.log('Button 1:', pressed)}
            ariaLabel="Secondary button 1"
          />
          
          <CircularStartButton
            onToggle={(pressed) => console.log('Button 2:', pressed)}
            initialPressed={true}
            ariaLabel="Secondary button 2"
          />
          
          <CircularStartButton
            disabled={true}
            ariaLabel="Disabled button"
          />
        </div>

        {/* 事件日志 */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3>Event Log</h3>
            <button 
              onClick={clearLog}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FDFEFD',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Clear Log
            </button>
          </div>
          
          <div style={{ 
            maxHeight: '200px', 
            overflowY: 'auto',
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '1.4'
          }}>
            {log.length === 0 ? (
              <div style={{ opacity: 0.6, fontStyle: 'italic' }}>
                No events yet. Click the button above to see events here.
              </div>
            ) : (
              log.map((entry, index) => (
                <div key={index} style={{ marginBottom: '4px' }}>
                  {entry}
                </div>
              ))
            )}
          </div>
        </div>

        {/* 使用说明 */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          padding: '20px', 
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <h3 style={{ marginTop: 0 }}>Usage Instructions</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Click</strong> the button to toggle between active/inactive states</li>
            <li><strong>Tab</strong> to focus the button, then press <strong>Space</strong> or <strong>Enter</strong> to activate</li>
            <li>The button shows <strong>hover</strong> and <strong>focus</strong> states for better accessibility</li>
            <li>Supports <strong>prefers-reduced-motion</strong> for users who prefer less animation</li>
            <li>Check the browser console for additional button interaction logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CircularStartButtonDemo;
