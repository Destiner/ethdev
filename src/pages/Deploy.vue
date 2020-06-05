<template>
	<div>
		<h1>Deploy a contract</h1>
		<div>
			<textarea
				v-model="bytecode"
				rows="10"
				cols="80"
			/>
		</div>
		<button @click="deploy">
			Deploy
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bytecode: '',
		};
	},
	methods: {
		async deploy() {
			const ethereum = window.ethereum;
			const accounts = await ethereum.enable();
			const txData = {
				from: accounts[0],
				data: this.bytecode,
			};
			ethereum.sendAsync({
				method: 'eth_sendTransaction',
				params: [txData],
			}, (tx) => {
				console.log(tx);
			});
		},
	},
};
</script>
