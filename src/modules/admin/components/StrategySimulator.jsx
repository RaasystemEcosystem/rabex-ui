import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function StrategySimulator() {
  const [aiStrategy, setAiStrategy] = useState({
    riskTolerance: "",
    stopLoss: "",
    takeProfit: "",
    tradingPairs: "",
    strategyNotes: "",
  });

  const [simulationResults, setSimulationResults] = useState(null);

  const simulateTrading = () => {
    const { riskTolerance, stopLoss, takeProfit } = aiStrategy;
    if (!riskTolerance || !stopLoss || !takeProfit) return alert("Fill in AI strategy fields");
    const result = `Simulating with ${riskTolerance} risk, SL at ${stopLoss}%, TP at ${takeProfit}%...`;
    setSimulationResults(result);
  };

  return (
    <Card className="mb-6">
      <CardContent className="grid gap-4">
        <Label className="text-lg">AI Strategy Configuration</Label>
        <Input
          placeholder="Risk Tolerance (Low/Medium/High)"
          value={aiStrategy.riskTolerance}
          onChange={(e) => setAiStrategy({ ...aiStrategy, riskTolerance: e.target.value })}
        />
        <Input
          placeholder="Stop-Loss %"
          value={aiStrategy.stopLoss}
          onChange={(e) => setAiStrategy({ ...aiStrategy, stopLoss: e.target.value })}
        />
        <Input
          placeholder="Take-Profit %"
          value={aiStrategy.takeProfit}
          onChange={(e) => setAiStrategy({ ...aiStrategy, takeProfit: e.target.value })}
        />
        <Input
          placeholder="Preferred Trading Pairs (comma-separated)"
          value={aiStrategy.tradingPairs}
          onChange={(e) => setAiStrategy({ ...aiStrategy, tradingPairs: e.target.value })}
        />
        <Textarea
          placeholder="Notes or Strategy Description"
          value={aiStrategy.strategyNotes}
          onChange={(e) => setAiStrategy({ ...aiStrategy, strategyNotes: e.target.value })}
        />
        <Button onClick={simulateTrading}>Simulate Strategy</Button>
        {simulationResults && <p className="text-sm text-green-600">{simulationResults}</p>}
      </CardContent>
    </Card>
  );
}
